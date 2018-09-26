var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: './package/MestNote-win32-x64',
  outputDirectory: './build',
  authors: 'Mestuary',
  exe: 'MestNote.exe'
});

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));