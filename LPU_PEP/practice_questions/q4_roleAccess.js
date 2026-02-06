

function createUser(role) {
    return function () {
        if (role === 'admin') {
            console.log("Access Granted: Admin");
        } else {
            console.log("Access Denied: Insufficient permissions");
        }
    };
}

// Test
const adminCheck = createUser("admin");
adminCheck(); // Output: Access Granted: Admin

const guestCheck = createUser("guest");
guestCheck(); // Output: Access Denied: Insufficient permissions
