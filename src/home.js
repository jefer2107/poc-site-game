import Unity, {UnityContext} from 'react-unity-webgl';

export const Home = () => {

    const unityContext = new UnityContext({
        loaderUrl: '/roleta/build.loader.js',
        dataUrl: '/roleta/webgl.data',
        frameworkUrl: '/roleta/build.framework.js',
        codeUrl: '/roleta/build.wasm',
      });

    return(
        <div>
            <Unity  unityContext={unityContext} style={{width: "390px", height: "844px", justifySelf: "center", alignSelf: "center"}} />
        </div>
    )
}