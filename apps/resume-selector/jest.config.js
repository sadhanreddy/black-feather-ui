module.exports = {
  name: 'resume-selector',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/resume-selector',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
