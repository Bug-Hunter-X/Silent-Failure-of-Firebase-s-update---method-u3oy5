function updateProfile(user) {
  return db.collection('users').doc(user.uid).update({
    displayName: user.displayName,
    photoURL: user.photoURL,
  }).catch(function(error) {
    console.error("Error updating document: ", error);
  });
}