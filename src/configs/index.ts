import test from '@configs/test';
import dev from '@configs/dev';
import pre from '@configs/pre';
import pro from '@configs/pro';

const enviroments = {
    test,dev,pre,pro,
}

const index = (env: string | 'test' | 'dev' | 'pre' | 'pro' ):()=> any =>{
    return enviroments[env] || (() => null);
};

export default index;