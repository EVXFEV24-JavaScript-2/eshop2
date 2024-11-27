class ProductService {
    // Ifall man hade behövt en API nyckel hade den kunna legat här
    /*constructor(apiKey) {
        this.apiKey = apiKey;
    }*/

    async getAllProducts() {}
}

class DummyJsonProductService extends ProductService {
    async getAllProducts() {
        const response = await fetch("https://dummyjson.com/products");
        
        // Felhantering kan hanteras så här, som ett exempel
        /*if (response.status === 500) {
            return { error: "Server error"};
        }*/

        return await response.json();
    }
}

/*
class JsonPlaceholderProductService extends ProductService {
    async getAllProducts() {
        const response = await fetch("https://jsonplaceholder.com/products");
        return await response.json();
    }
}

class TestingProductService extends ProductService {
    async getAllProducts() {
        return {
            products: [
                {},
                {}
            ]
        }
    }
}*/