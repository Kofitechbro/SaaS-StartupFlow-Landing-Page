import './Buttons.css';

export function Buttons({children, size='medium', variant='primary', type='button', onClick}) {
    return (
            <button className={`btn btn-${variant} btn-${size}`} type={type} onClick={onClick}>
                {children}
            </button>
    );
}