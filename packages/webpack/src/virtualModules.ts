import { Compiler } from 'webpack';
import VirtualModulesPlugin from 'webpack-virtual-modules';

function createVirtualModuleWrapper() {
  const instance = new VirtualModulesPlugin();

  function write(compiler: Compiler, path: string, content: string) {
    instance.apply(compiler);
    instance.writeModule(`node_modules/${path}`, content);
  }

  return {
    write,
    instance,
  };
}

export default createVirtualModuleWrapper();
