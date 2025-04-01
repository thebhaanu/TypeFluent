document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeSwitch = document.getElementById('theme-switch');
    const htmlElement = document.documentElement;

    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeSwitch.checked = true;
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        themeSwitch.checked = false;
    }

    // Listen for changes in theme toggle
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Get all keys and add event listeners for interactive highlighting
    const keys = document.querySelectorAll('.key');
    
    keys.forEach(key => {
        // Highlight the corresponding finger when hovering over a key
        key.addEventListener('mouseenter', () => {
            const fingerType = key.getAttribute('data-finger');
            if (fingerType) {
                // Find the corresponding finger element
                if (fingerType === 'thumb') {
                    // Both thumbs are used for space
                    document.getElementById('left-thumb').style.transform = 'rotate(-45deg) scale(1.2)';
                    document.getElementById('right-thumb').style.transform = 'rotate(45deg) scale(1.2)';
                    document.getElementById('left-thumb').style.boxShadow = '0 0 10px rgba(255, 160, 122, 0.8)';
                    document.getElementById('right-thumb').style.boxShadow = '0 0 10px rgba(255, 160, 122, 0.8)';
                } else {
                    const fingerElement = document.getElementById(fingerType);
                    if (fingerElement) {
                        // Highlight the finger by scaling and adding a glow effect
                        fingerElement.style.transform = fingerType.includes('thumb') ? 
                            (fingerType.includes('left') ? 'rotate(-45deg) scale(1.2)' : 'rotate(45deg) scale(1.2)') : 
                            'scale(1.1)';
                        fingerElement.style.boxShadow = '0 0 10px ' + getComputedStyle(fingerElement).backgroundColor;
                    }
                }
            }
        });
        
        // Remove highlighting when mouse leaves the key
        key.addEventListener('mouseleave', () => {
            const fingerType = key.getAttribute('data-finger');
            if (fingerType) {
                if (fingerType === 'thumb') {
                    document.getElementById('left-thumb').style.transform = 'rotate(-45deg)';
                    document.getElementById('right-thumb').style.transform = 'rotate(45deg)';
                    document.getElementById('left-thumb').style.boxShadow = 'none';
                    document.getElementById('right-thumb').style.boxShadow = 'none';
                } else {
                    const fingerElement = document.getElementById(fingerType);
                    if (fingerElement) {
                        fingerElement.style.transform = fingerType.includes('thumb') ? 
                            (fingerType.includes('left') ? 'rotate(-45deg)' : 'rotate(45deg)') : 
                            'none';
                        fingerElement.style.boxShadow = 'none';
                    }
                }
            }
        });
        
        // Add clickable keyboard functionality
        key.addEventListener('click', () => {
            // Add pressed effect
            key.style.transform = 'translateY(3px)';
            key.style.boxShadow = '0 1px 1px rgba(0, 0, 0, 0.1)';
            
            // Reset after a short delay
            setTimeout(() => {
                key.style.transform = '';
                key.style.boxShadow = '';
            }, 200);
        });
    });
    
    // Interactive legend items - highlight keys and fingers when hovering over legend
    const legendItems = document.querySelectorAll('.legend-item');
    
    legendItems.forEach(item => {
        const colorDiv = item.querySelector('.legend-color');
        const fingerType = colorDiv.id.replace('-color', '');
        
        item.addEventListener('mouseenter', () => {
            // Highlight all keys associated with this finger
            if (fingerType === 'thumb') {
                const thumbKeys = document.querySelectorAll('.key[data-finger="thumb"]');
                thumbKeys.forEach(key => {
                    key.style.transform = 'translateY(-2px)';
                    key.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
                });
                
                // Highlight both thumbs
                document.getElementById('left-thumb').style.transform = 'rotate(-45deg) scale(1.2)';
                document.getElementById('right-thumb').style.transform = 'rotate(45deg) scale(1.2)';
                document.getElementById('left-thumb').style.boxShadow = '0 0 10px rgba(255, 160, 122, 0.8)';
                document.getElementById('right-thumb').style.boxShadow = '0 0 10px rgba(255, 160, 122, 0.8)';
            } else {
                const fingerKeys = document.querySelectorAll(`.key[data-finger="${fingerType}"]`);
                fingerKeys.forEach(key => {
                    key.style.transform = 'translateY(-2px)';
                    key.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
                });
                
                // Highlight the finger
                const fingerElement = document.getElementById(fingerType);
                if (fingerElement) {
                    fingerElement.style.transform = fingerType.includes('thumb') ? 
                        (fingerType.includes('left') ? 'rotate(-45deg) scale(1.2)' : 'rotate(45deg) scale(1.2)') : 
                        'scale(1.1)';
                    fingerElement.style.boxShadow = '0 0 10px ' + getComputedStyle(fingerElement).backgroundColor;
                }
            }
        });
        
        item.addEventListener('mouseleave', () => {
            // Reset highlighting
            if (fingerType === 'thumb') {
                const thumbKeys = document.querySelectorAll('.key[data-finger="thumb"]');
                thumbKeys.forEach(key => {
                    key.style.transform = '';
                    key.style.boxShadow = '';
                });
                
                document.getElementById('left-thumb').style.transform = 'rotate(-45deg)';
                document.getElementById('right-thumb').style.transform = 'rotate(45deg)';
                document.getElementById('left-thumb').style.boxShadow = 'none';
                document.getElementById('right-thumb').style.boxShadow = 'none';
            } else {
                const fingerKeys = document.querySelectorAll(`.key[data-finger="${fingerType}"]`);
                fingerKeys.forEach(key => {
                    key.style.transform = '';
                    key.style.boxShadow = '';
                });
                
                const fingerElement = document.getElementById(fingerType);
                if (fingerElement) {
                    fingerElement.style.transform = fingerType.includes('thumb') ? 
                        (fingerType.includes('left') ? 'rotate(-45deg)' : 'rotate(45deg)') : 
                        'none';
                    fingerElement.style.boxShadow = 'none';
                }
            }
        });
    });

    // Map of keyboard keys to our virtual keyboard keys
    const keyMap = {
        '`': 'left-pinky', '1': 'left-pinky', '2': 'left-ring', '3': 'left-middle', '4': 'left-index', '5': 'left-index',
        '6': 'right-index', '7': 'right-index', '8': 'right-middle', '9': 'right-ring', '0': 'right-pinky',
        '-': 'right-pinky', '=': 'right-pinky', 'backspace': 'right-pinky',
        'tab': 'left-pinky', 'q': 'left-pinky', 'w': 'left-ring', 'e': 'left-middle', 'r': 'left-index', 't': 'left-index',
        'y': 'right-index', 'u': 'right-index', 'i': 'right-middle', 'o': 'right-ring', 'p': 'right-pinky',
        '[': 'right-pinky', ']': 'right-pinky', '\\': 'right-pinky',
        'capslock': 'left-pinky', 'a': 'left-pinky', 's': 'left-ring', 'd': 'left-middle', 'f': 'left-index', 'g': 'left-index',
        'h': 'right-index', 'j': 'right-index', 'k': 'right-middle', 'l': 'right-ring', ';': 'right-pinky',
        "'": 'right-pinky', 'enter': 'right-pinky',
        'shift': 'left-pinky', 'z': 'left-pinky', 'x': 'left-ring', 'c': 'left-middle', 'v': 'left-index', 'b': 'left-index',
        'n': 'right-index', 'm': 'right-index', ',': 'right-middle', '.': 'right-ring', '/': 'right-pinky',
        'control': 'left-pinky', 'alt': 'left-pinky', 'meta': 'left-pinky',
        ' ': 'thumb'
    };

    // Map of key codes to our display names
    const keyCodeMap = {
        'Backquote': '`', 'Digit1': '1', 'Digit2': '2', 'Digit3': '3', 'Digit4': '4', 'Digit5': '5',
        'Digit6': '6', 'Digit7': '7', 'Digit8': '8', 'Digit9': '9', 'Digit0': '0',
        'Minus': '-', 'Equal': '=', 'Backspace': 'Backspace',
        'Tab': 'Tab', 'KeyQ': 'Q', 'KeyW': 'W', 'KeyE': 'E', 'KeyR': 'R', 'KeyT': 'T',
        'KeyY': 'Y', 'KeyU': 'U', 'KeyI': 'I', 'KeyO': 'O', 'KeyP': 'P',
        'BracketLeft': '[', 'BracketRight': ']', 'Backslash': '\\',
        'CapsLock': 'Caps', 'KeyA': 'A', 'KeyS': 'S', 'KeyD': 'D', 'KeyF': 'F', 'KeyG': 'G',
        'KeyH': 'H', 'KeyJ': 'J', 'KeyK': 'K', 'KeyL': 'L', 'Semicolon': ';',
        'Quote': "'", 'Enter': 'Enter',
        'ShiftLeft': 'Shift', 'KeyZ': 'Z', 'KeyX': 'X', 'KeyC': 'C', 'KeyV': 'V', 'KeyB': 'B',
        'KeyN': 'N', 'KeyM': 'M', 'Comma': ',', 'Period': '.', 'Slash': '/',
        'ShiftRight': 'Shift',
        'ControlLeft': 'Ctrl', 'AltLeft': 'Alt', 'MetaLeft': 'Win', 'Space': 'Space',
        'AltRight': 'Alt', 'MetaRight': 'Win', 'ContextMenu': 'Menu', 'ControlRight': 'Ctrl'
    };

    // Function to highlight a key on the virtual keyboard
    function highlightKey(keyCode) {
        const keyText = keyCodeMap[keyCode];
        if (!keyText) return;
        
        // Find the key on the virtual keyboard
        let targetKey = null;
        keys.forEach(key => {
            if (key.textContent === keyText) {
                targetKey = key;
            }
        });
        
        if (targetKey) {
            // Add pressed effect
            targetKey.style.transform = 'translateY(3px)';
            targetKey.style.boxShadow = '0 1px 1px rgba(0, 0, 0, 0.1)';
            targetKey.style.backgroundColor = '#e0e0e0';
            
            // Also highlight the corresponding finger
            const fingerType = targetKey.getAttribute('data-finger');
            if (fingerType) {
                if (fingerType === 'thumb') {
                    document.getElementById('left-thumb').style.transform = 'rotate(-45deg) scale(1.2)';
                    document.getElementById('right-thumb').style.transform = 'rotate(45deg) scale(1.2)';
                    document.getElementById('left-thumb').style.boxShadow = '0 0 10px rgba(255, 160, 122, 0.8)';
                    document.getElementById('right-thumb').style.boxShadow = '0 0 10px rgba(255, 160, 122, 0.8)';
                } else {
                    const fingerElement = document.getElementById(fingerType);
                    if (fingerElement) {
                        fingerElement.style.transform = fingerType.includes('thumb') ? 
                            (fingerType.includes('left') ? 'rotate(-45deg) scale(1.2)' : 'rotate(45deg) scale(1.2)') : 
                            'scale(1.1)';
                        fingerElement.style.boxShadow = '0 0 10px ' + getComputedStyle(fingerElement).backgroundColor;
                    }
                }
            }
        }
    }

    // Function to reset a key's highlight
    function resetKeyHighlight(keyCode) {
        const keyText = keyCodeMap[keyCode];
        if (!keyText) return;
        
        // Find the key on the virtual keyboard
        let targetKey = null;
        keys.forEach(key => {
            if (key.textContent === keyText) {
                targetKey = key;
            }
        });
        
        if (targetKey) {
            // Remove pressed effect
            targetKey.style.transform = '';
            targetKey.style.boxShadow = '';
            
            // Reset background color to what it should be based on finger assignment
            const fingerType = targetKey.getAttribute('data-finger');
            if (fingerType) {
                // Get the original color based on the finger type
                let originalColor;
                switch(fingerType) {
                    case 'left-pinky': originalColor = '#FFB6C1'; break;
                    case 'left-ring': originalColor = '#FFD700'; break;
                    case 'left-middle': originalColor = '#98FB98'; break;
                    case 'left-index': originalColor = '#ADD8E6'; break;
                    case 'right-index': originalColor = '#D8BFD8'; break;
                    case 'right-middle': originalColor = '#FFDAB9'; break;
                    case 'right-ring': originalColor = '#B0E0E6'; break;
                    case 'right-pinky': originalColor = '#FAFAD2'; break;
                    case 'thumb': originalColor = '#FFA07A'; break;
                    default: originalColor = '#fff';
                }
                targetKey.style.backgroundColor = originalColor;
                
                // Reset finger highlight
                if (fingerType === 'thumb') {
                    document.getElementById('left-thumb').style.transform = 'rotate(-45deg)';
                    document.getElementById('right-thumb').style.transform = 'rotate(45deg)';
                    document.getElementById('left-thumb').style.boxShadow = 'none';
                    document.getElementById('right-thumb').style.boxShadow = 'none';
                } else {
                    const fingerElement = document.getElementById(fingerType);
                    if (fingerElement) {
                        fingerElement.style.transform = fingerType.includes('thumb') ? 
                            (fingerType.includes('left') ? 'rotate(-45deg)' : 'rotate(45deg)') : 
                            'none';
                        fingerElement.style.boxShadow = 'none';
                    }
                }
            }
        }
    }

    // Listen for actual keyboard events
    document.addEventListener('keydown', (e) => {
        // Prevent spacebar from scrolling the page but only outside of input elements
        if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
        
        highlightKey(e.code);
    });

    document.addEventListener('keyup', (e) => {
        resetKeyHighlight(e.code);
    });
}); 