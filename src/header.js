import headerLogo from '../src/assets/Avatar_v3 1.png';


function Header() {
    const mainHeader = { 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: '0px 70px',
        height: '112px'
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
        fontSize: '17px'
    }
    const twiter={
        fontSize: '17px'
    }
    return (
        <header>
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
                    <p style={twiter}>@_void_nen</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
