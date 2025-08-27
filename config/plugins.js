module.exports = () => ({
    "documentation": {
        enabled: true,
    },
    "users-permissions": {
        config: {
            register: {
                allowedFields: ["role", "customRole"],
            },
        },
    }
});
