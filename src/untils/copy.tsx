/**
 * 复制
 * @param {string} text
 */
export const handleCopyText = (text: string) => {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE
        return window.clipboardData.setData('Text', text);
    }
    if (
        document.queryCommandSupported &&
        document.queryCommandSupported('copy')
    ) {
        const textarea = document.createElement('textarea');
        textarea.textContent = text;
        textarea.style.position = 'fixed';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand('copy'); // 复制
        } catch (ex) {
            console.warn('Copy to clipboard failed.', ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }

    return null;
}