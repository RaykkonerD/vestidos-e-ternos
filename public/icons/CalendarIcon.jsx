export default function CalendarIcon(props) {

	let tamanho = (typeof props.tamanho !== "undefined") ? props.tamanho : 10;
	let fill = (typeof props.fill !== "undefined") ? props.fill : "#e82727";
	let estilo = (typeof props.estilo !== "undefined") ? props.estilo : {};

	if (props.preenchido) {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width={tamanho} className={props.className} height={tamanho} fill={fill} style={estilo} viewBox="0 0 16 16">
				<path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
			</svg>
		)
	}

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={tamanho} className={props.className} height={tamanho} fill={fill} style={estilo} viewBox="0 0 16 16">
			<path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
			<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
		</svg>
	)
}
