import Style from './Footer.module.css';
const Footer = () => {
	return (
		<>
			<div className={Style.Container_general_footer}>
				<div className={Style.box_footer}>
					<br />
					<h2>Taller 1 - Parcial</h2>
					<h3>Hecha por:</h3>
					<h3>Cristian Rendon Rodriguez - 1001506044</h3>
					<h3>Andres Fina Ruiz - 1001229128</h3>
					<h3>Profesor: Giovanny Andres Vargas</h3>
					<br />
				</div>
			</div>
		</>
	);
};

export default Footer;
