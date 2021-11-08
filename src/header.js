import headerLogo from '../src/assets/Avatar_v3 1.png';


function Header() {
    const stickeyHeader = {
        position: 'sticky',
        zIndex: '999',
        top: '0'
    }
    const mainHeader = { 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: '0px 140px',
        height: '112px',
        backgroundColor: '#ffffff'
    }
    const headerImage ={
        width: '56px',
        height: '56px',
        borderRadius: '50%'
    }
    const listStyleDiv = {
        width: '50%'
    }
    const listStyle={
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '17px',
        color: ' rgba(0, 0, 0, 0.6)',
        lineHeight: '22px',
        letterSpacing: '0.0043em'
    }
    const twiter={
        fontSize: '17px',
        lineHeight: '22px',
        letterSpacing: '0.0043em'
    }
    return (
        <header style={stickeyHeader}>
            <div style={mainHeader}>
                <div>
                    <img src={headerLogo} alt="logo" style={headerImage}/>
                </div>
                <div style={listStyleDiv}>
                    <ul style={listStyle}>
                        <li>Projects</li>
                        <li>Workshops</li>
                        <li>Local meets</li>
                        <li>Reach Me</li>
                    </ul>
                </div>
                <div>
                    <p style={twiter}>@voidnen</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
