const Utils = (props) => {
    const formatTime = (duration) => {
		const minutes = Math.floor(duration / 60);
		const seconds = duration % 60;
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};
    return formatTime(props.duration);
}
 
export default Utils;