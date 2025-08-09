import './HAHAYOUSUCKTRYAGAIN.css'
import DAWHEELOFD00M from './DAWHEELOFD00M';

function HAHAYOUSUCKTRYAGAIN(){
    return (
        <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    zIndex: '5000',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                    }}
            className='bg-repeat'
                >   
                <img 
                    src='USUCK.png'
                    style={{
                            position: 'absolute',
                            background: 'orange',
                            height: '300px',
                            width: '500px'
                            }}
                    // className='flash-and-spin'
                />
                <div
                    style={{
                            position: 'absolute'
                            }}
                >
                    <DAWHEELOFD00M/>
                </div>
                 

        </div>
    )
}
export default HAHAYOUSUCKTRYAGAIN;

