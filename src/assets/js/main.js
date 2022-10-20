function ValidateFormatFile(formats, format) {
	format = format.replace('.', '');
	var valid = true;

	var index = formats.indexOf(format);

	if (index == -1) {
		valid = false
	}

	return valid;
}

function OnSuccessFile(e, propertyname) {
	$("#" + propertyname).val(e.response.name);
}




function OnErrorFile(e, propertyname) {

}

function OnSelectFile(e, extensions, maxRequestLength) {
	if (extensions != "" ) {
		var files = e.files;

		$.each(files, function () {
			if (this.size > maxRequestLength * 1024) {
				alert("El archivo es demasiado pesado y no se puede guardar. Solo archivos con peso menor a " + (maxRequestLength/1024) + "MB");
				e.preventDefault(); // This cancels the upload for the file
			}
			else
			{
				var valid = ValidateFormatFile(extensions, this.extension.toLowerCase())
				if (!valid) {
					alert("Solo se permiten archivos con extensiones:  " + extensions);
					e.preventDefault();
					return false;
				}
			}
		});

	}
}

function OnUploadFile(e, folder, uploadname) {
	e.data = {
		fieldName: "'" + uploadname + "'",
		path: "'" + folder + "'",
	};
}
