/* eslint-disable no-throw-literal */
function getSession() {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  return { token, cbid };
}
export async function getUser() {
  const browserData = getSession();
  const requestOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`,
    requestOption
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}

export async function getUserOrder() {
  const browserData = getSession();
  const requestOption = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.cbid}`,
    requestOption
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = await response.json();
  return data;
}

export async function createOrder(cartList, total, user) {
  const browserData = getSession();
  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const requestOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserData.token}`,
    },
    body: JSON.stringify(order),
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders/`,
    requestOption
  );
  if (!response.ok) {
    throw { message: response.statusText, status: response.status };
  }
  const data = response.json();
  return data;
}
