function DynamicHeadInsertion(headElement: Element): void {
    if (headElement) {
        const documentHead: HTMLHeadElement = document.head || document.getElementsByTagName('head')[0];
        documentHead.appendChild(headElement);
    }
}

export default DynamicHeadInsertion;