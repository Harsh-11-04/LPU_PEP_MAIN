console.log("\n--- Example 1 Start ---");
setTimeout(() => {
    console.log("1. First operation done");
    setTimeout(() => {
        console.log("2. Second operation done");
        setTimeout(() => {
            console.log("3. Third operation done");
            setTimeout(() => {
                console.log("4. Fourth operation done");
                setTimeout(() => {
                    console.log("5. Fifth operation done");
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

function ecommerceFlow() {
    console.log("\n--- Example 2 Start ---");
    const orderId = 123;

    setTimeout(() => {
        console.log(`User verified for order ${orderId}`);
        setTimeout(() => {
            console.log(`Inventory checked for order ${orderId}`);
            setTimeout(() => {
                console.log(`Payment processed for order ${orderId}`);
                setTimeout(() => {
                    console.log(`Database updated for order ${orderId}`);
                    setTimeout(() => {
                        console.log(`Email sent for order ${orderId}`);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
}

function getUserData(userId, callback) {
    setTimeout(() => {
        console.log("Fetched User");
        callback({ id: userId, username: "john_doe", role: "admin" });
    }, 1000);
}

function getPermissions(role, callback) {
    setTimeout(() => {
        console.log("Fetched Permissions");
        callback(["read", "write", "delete"]);
    }, 1000);
}

function getDashboardData(permissions, callback) {
    setTimeout(() => {
        console.log("Fetched Dashboard Data");
        callback({ graphs: true, reports: true });
    }, 1000);
}

function runUserScenario() {
    getUserData(1, (user) => {
        if (user.role === 'admin') {
            getPermissions(user.role, (permissions) => {
                if (permissions.includes('write')) {
                    getDashboardData(permissions, (data) => {
                        console.log("Dashboard Data:", data);
                    });
                }
            });
        }
    });
}

function fileOperations() {
    console.log("\n--- Example 4 Start ---");

    function readFile(file, cb) { setTimeout(() => cb("config_data"), 100); }
    function openFile(file, cb) { setTimeout(() => cb("file_handle"), 100); }
    function writeFile(handle, data, cb) { setTimeout(() => cb(), 100); }
    function closeFile(handle, cb) { setTimeout(() => cb(), 100); }

    readFile("config.json", (config) => {
        console.log("1. Config loaded");
        openFile("log.txt", (handle) => {
            console.log("2. Log file opened");
            writeFile(handle, "Log entry 1", () => {
                console.log("3. Log written");
                closeFile(handle, () => {
                    console.log("4. Log file closed");
                });
            });
        });
    });
}

function makeBreakfast() {
    console.log("\n--- Example 5 Start ---");

    setTimeout(() => {
        console.log("1. Bread toasted");
        setTimeout(() => {
            console.log("2. Butter spread on toast");
            setTimeout(() => {
                console.log("3. Jam added");
                setTimeout(() => {
                    console.log("4. Coffee brewed");
                    setTimeout(() => {
                        console.log("5. Breakfast is ready!");
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
}
