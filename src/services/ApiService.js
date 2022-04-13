class ApiService {
  constructor() {
    this.baseUrl = "http://localhost:3000";
  }

  async getProducts() {
    return fetch(`${this.baseUrl}/products?_embed=comments`)
    .then((res) => res.json());
  }

  async addProduct(product) {
    return fetch(`${this.baseUrl}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.sstringify(product),
    })
    .then((res) => res.json);
  }

  async editProduct(product) {
    return fetch(`${this.baseUrl}/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.sstringify(product),
    })
    .then((res) => res.json);
  }

  async deleteProduct(product) {
    return fetch(`${this.baseUrl}/products/${product.id}`, {
      method: 'DELETE',
    })
    .then((res) => res.json);
  }
}

export default new ApiService();
