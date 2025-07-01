interface UserInfo {
    id: string;
    name: string;
    email: string;
}

const ApiAuth = {
    getMe: (): Promise<UserInfo> => {
        return new Promise((resolve) => {
            // Simulate API call
            setTimeout(() => {
                resolve({
                    id: "1",
                    name: "Test User",
                    email: "test@example.com",
                });
            }, 500);
        });
    },
};

export default ApiAuth;