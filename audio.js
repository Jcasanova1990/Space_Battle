document.addEventListener('DOMContentLoaded', function() {
    // Get references to the audio elements
    let attackSound = document.getElementById('attack-sound');
    let repairSound = document.getElementById('repair-sound');
    let battleMusic = document.getElementById('battle-music');
  
    // Get references to the volume slider and mute button
    let volumeSlider = document.getElementById('volumeSlider');
    let muteButton = document.getElementById('muteButton');
  
    // Initial Audio
    updateVolume();
  
    // Add event listeners for the volume slider
    volumeSlider.addEventListener('input', updateVolume);
    muteButton.addEventListener('click', toggleMute);
  
    function updateVolume() {
      let volume = volumeSlider.value;
      // Any audios we need to add
      attackSound.volume = volume;
      repairSound.volume = volume;
      battleMusic.volume = volume;
      volumeSlider.style.background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${volume * 100}%, #ddd ${volume * 100}%, #ddd 100%)`;
  
      // Changes are Span value
      document.getElementById('volumeValue').textContent = Math.round(volume * 100) + '%';
    }
  
    function toggleMute() {
      // Toggles a mute function for all audios, ADD all of them
      attackSound.muted = !attackSound.muted;
      repairSound.muted = !repairSound.muted;
      battleMusic.muted = !battleMusic.muted;
  
      // name the mute span what it will change between
      muteButton.textContent = attackSound.muted ? 'Unmute' : 'Mute';
    }
  });