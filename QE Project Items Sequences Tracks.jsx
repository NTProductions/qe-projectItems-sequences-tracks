// qe project items, sequences, tracks

// PROJECT ITEMS
// properties
QEProjectItem.clip;
QEProjectItem.filePath;
QEProjectItem.name;
// methods
QEProjectItem.automateToSequence(object, number, number, number, number);
QEProjectItem.containsSpeechTrack();
QEProjectItem.createProxy(string, string);
QEProjectItem.getMetadataSize();
QEProjectItem.isAudioConforming();
QEProjectItem.isAudioPeakGenerating();
QEProjectItem.isIndexing();
QEProjectItem.isOffline();
QEProjectItem.isPending();
QEProjectItem.linkMedia(string, bool);
QEProjectItem.openInSource();
QEProjectItem.rename(assetName);
QEProjectItem.setOffline();

// SEQUENCES
// properties
QESequence.CTI;
QESequence.audioDisplayFormat;
QESequence.audioFrameRate;
QESequence.editingMode;
QESequence.fieldType;
QESequence.guid;
QESequence.inPoint;
QESequence.multicam;
QESequence.name;
QESequence.numAudioTracks;
QESequence.numVideoTracks;
QESequence.outPoint;
QESequence.par;
QESequence.player;
QESequence.presetList;
QESequence.previewPresetCodec;
QESequence.previewPresetPath;
QESequence.useMaxBitDepth;
QESequence.useMaxRenderQuality;
QESequence.videoDisplayFormat;
QESequence.videoFrameRate;
QESequence.workInPoint;
QESequence.workOutPoint;
// methods
QESequence.addTracks(number, number, number, ...);
QESequence.close();
QESequence.createExportJob(string, string);
QESequence.deletePreviewFiles(string, string);
QESequence.exportDirect(string, string, bool);
QESequence.exportFrameBMP(string, string, string);
QESequence.exportFrameDPX(string, string, string);
QESequence.exportFrameGIF(string, string, string);
QESequence.exportFrameJPEG(string, string, string);
QESequence.exportFramePNG(string, string, string);
QESequence.exportFrameTIFF(string, string, string);
QESequence.exportFrameTarga(string, string, string);
QESequence.exportToAME(string, string, bool);
QESequence.extract(string, string);
QESequence.flushCache();
QESequence.getAudioTrackAt(number);
QESequence.getEmptyBarTimes();
QESequence.getExportComplete();
QESequence.getExportFileExtension(string);
QESequence.getGreenBarTimes();
QESequence.getRedBarTimes();
QESequence.getVideoTrackAt(number);
QESequence.getYellowBarTimes();
QESequence.isIncompleteBackgroundVideoEffects();
QESequence.isOpen();
QESequence.left(string, string);
QESequence.lockTracks(string, bool);
QESequence.makeCurrent();
QESequence.muteTracks(string, bool);
QESequence.razor(string, bool, bool);
QESequence.removeAudioTrack(number);
QESequence.removeEmptyAudioTracks();
QESequence.removeEmptyVideoTracks();
QESequence.removeTracks(number, number, number, ...);
QESequence.removeVideoTrack(number);
QESequence.renderAll();
QESequence.renderAudio();
QESequence.renderPreview();
QESequence.setAudioDisplayFormat(number);
QESequence.setAudioFrameRate(number);
QESequence.setCTI(string);
QESequence.setInOutPoints(string, string, bool);
QESequence.setInPoint(string, bool, bool);
QESequence.setOutPoint(string, bool, bool);
QESequence.setPreviewFrameSize(number, number);
QESequence.setPreviewPresetPath(string);
QESequence.setUseMaxBitDepth(bool);
QESequence.setUseMaxRenderQuality(bool);
QESequence.setVideoDisplayFormat(number);
QESequence.setVideoFrameSize(number, number);
QESequence.setWorkInOutPoints(string, string, bool);
QESequence.setWorkInPoint(string, bool);
QESequence.setWorkOutPoint(string, bool);
QESequence.syncLockTracks(string, bool);

// TRACKS
// properties
QETrack.id;
QETrack.index;
QETrack.name;
QETrack.numComponents;
QETrack.numItems;
QETrack.numTransitions;
QETrack.type;
// methods
QETrack.addAudioEffect(object, number, bool);
QETrack.getComponentAt(number);
QETrack.getItemAt(number);
QETrack.getTransitionAt(number);
QETrack.insert(object, string, bool, bool, bool, bool);
QETrack.isLocked();
QETrack.isMuted();
QETrack.isSyncLocked();
QETrack.overwrite(object, string, bool, bool, bool);
QETrack.razor(string, bool, bool);
QETrack.setLock(bool);
QETrack.setMute(bool);
QETrack.setName(string);
QETrack.setSyncLock(bool);