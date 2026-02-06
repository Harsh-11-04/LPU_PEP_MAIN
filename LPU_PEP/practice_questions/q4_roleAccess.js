/**
 * Part A: Closure (Q4)
 * 4. Create a function createUser(role) that returns a function to check role-based access.
 */

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
