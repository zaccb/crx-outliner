(function(){
    // DOM Refs
    var dest = document.head || document.getElementsByTagName('head')[0],
        style = document.getElementById('crx-outliner-css');

    if(style === null)
    {
        // If not already there, build <style> tag to add outlines
        AppendChild(dest, BuildStyleElem());
    }
    else
    {
        // Kill node to remove outlines
        dest.removeChild(style);
    }
})();

function BuildStyleElem(){
    var elem = document.createElement('style'),
        css = '*{outline:1px dashed rebeccapurple !important;}';
    elem.type = 'text/css';
    elem.id = 'crx-outliner-css';
    elem.appendChild(document.createTextNode(css));
    return elem;
}

function AppendChild(parent,child){
    parent.appendChild(child);
}