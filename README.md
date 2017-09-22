/**************************************************
*************** nw环境下调用本地dll文件  **********
***************************************************/

1、全局安装nw-gyp模块
npm install -g nw-gyp
npm config set python python2.7
npm config set msvs_version 2015


2、npm install

3、npm install ref

4、npm install ffi

///////////////target：nw的版本
///////////////arch：系统位数（x64或ia32）

5、cd node_modules/ref （修改配置）
nw-gyp rebuild --target=0.14.6 --arch=ia32

6、cd node_modules/ffi（修改配置）
nw-gyp rebuild --target=0.14.6 --arch=ia32