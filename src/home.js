import Unity, {UnityContext} from 'react-unity-webgl';

export const Home = () => {

    const unityContext = new UnityContext({
        loaderUrl: '/build/CassinoWebGl.loader.js',
        dataUrl: '/build/webgl.data',
        frameworkUrl: '/build/build.framework.js',
        codeUrl: '/build/build.wasm',
      });

    return(
        <div>
            <Unity  unityContext={unityContext} style={{width: "100%", height: "100%", justifySelf: "center", alignSelf: "center"}} />
        </div>
    )
}