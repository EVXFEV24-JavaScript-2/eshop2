export class ProductService {
    // Ifall man hade behövt en API nyckel hade den kunna legat här
    /*constructor(apiKey) {
        this.apiKey = apiKey;
    }*/

    async getAllProducts() {}
}

// Exempel med flera, andra, APIer:
// PostService: get posts, create post, delete post
// CommentService: get comments, create comment, delete comment, like comment
// UserService: get user names, login, register, delete user

export class DummyJsonProductService extends ProductService {
    async getAllProducts() {
        const response = await fetch("https://dummyjson.com/products");
        
        // Felhantering kan hanteras så här, som ett exempel
        /*if (response.status === 500) {
            return { error: "Server error"};
        }*/

        return (await response.json()).products;
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