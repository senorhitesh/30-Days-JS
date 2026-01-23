

function fetchProduct(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Laptop", price: 999 }), 300);
  });
}

function fetchInventory(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ inStock: true, quantity: 45 }), 400);
  });
}

function fetchReviews(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ rating: 4.5, count: 230 }), 500);
  });
}

function fetchRecommendations(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([id + 1, id + 2, id + 3]), 600);
  });
}

async function getproduct(id){
 const result = await Promise.allSettled([
  fetchProduct(id),
  fetchInventory(id),
  fetchReviews(id),
  fetchRecommendations(id),
 ]);

 for (let items in result){
  if(result[items].status === `fulfilled`){
    result.values =  result[items]
  }
  else{

  }
 }
 const response ={
  product:null,
  inventory: null,
  reviewa: null,
  recommendation: [],
  errors: []  

 }
 return response
 }
console.log(getproduct(123))