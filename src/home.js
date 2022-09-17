import Unity, {UnityContext} from 'react-unity-webgl';

export const Home = () => {

    const unityContext = new UnityContext({
        loaderUrl: '/roleta/roleta.loader.js',
        dataUrl: '/roleta/roleta.data',
        frameworkUrl: '/roleta/roleta.framework.js',
        codeUrl: '/roleta/roleta.wasm',
      });

    return(
        <div>
            <Unity  unityContext={unityContext} style={{width: "50%", height: "100%", justifySelf: "center", alignSelf: "center"}} />
        </div>
    )
}