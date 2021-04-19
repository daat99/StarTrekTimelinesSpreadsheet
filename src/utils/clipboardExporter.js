import STTApi from 'sttapi';

export function exportToClipboard(str) 
{
	var str2 = str.replace(/,/g,"\t");
	const el = document.createElement('textarea');
	el.value = str2;
	el.setAttribute('readonly', '');
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	return str
}
