/**
 * Part A: Closure (Q5)
 * 5. Create a private settings object using closure with methods to read and update values.
 */

function createSettings() {
    let settings = {
        theme: 'light',
        notifications: true
    };

    return {
        getSetting: function (key) {
            return settings[key];
        },
        updateSetting: function (key, value) {
            if (Object.prototype.hasOwnProperty.call(settings, key)) {
                settings[key] = value;
                console.log(`Setting '${key}' updated to: ${value}`);
            } else {
                console.log(`Setting '${key}' does not exist.`);
            }
        }
    };
}

// Test
const mySettings = createSettings();
console.log("Theme:", mySettings.getSetting("theme"));
mySettings.updateSetting("theme", "dark");
console.log("New Theme:", mySettings.getSetting("theme"));
mySettings.updateSetting("invalid", "value"); // Should fail
