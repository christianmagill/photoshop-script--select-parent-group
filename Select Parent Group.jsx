var doc = app.activeDocument;
if(doc.activeLayer.parent!=doc) doc.activeLayer = doc.activeLayer.parent;