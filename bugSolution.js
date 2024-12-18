async function updateProfile(user) {
  const userDoc = await db.collection('users').doc(user.uid).get();
  if (!userDoc.exists) {
    console.error('User document not found');
    return false; // Or throw an error
  }

  return db.collection('users').doc(user.uid).update({
    displayName: user.displayName,
    photoURL: user.photoURL,
  }).catch(function(error) {
    console.error("Error updating document: ", error);
  });
} 