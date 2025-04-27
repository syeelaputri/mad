/* eslint-disable prettier/prettier */

// notes (versi modified slesai kelas 23 apr)

// nonaktifkan aturan eslint dan prettier (supaya nd error)
import React, {useState} from 'react';

// import React dan useState
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

// import komponen dari React Native
const SignUpMT = () => {
  // state untuk simpan nama
  const [fullName, setFullName] = useState('');
  // state untuk simpan email
  const [email, setEmail] = useState('');
  // state untuk simpan foto profil
  const [profileImage, setProfileImage] = useState(null);
  // state untuk kontrol pop-up foto
  const [photoModalVisible, setPhotoModalVisible] = useState(false);
  // state untuk kontrol error
  const [errorVisible, setErrorVisible] = useState(false);

  // cek apakah nama sesuai dengan "Jane Doe"
  const isNameMatch = fullName === 'Jane Doe';
  // cek apakah email sesuai dengan "jane@gmail.com"
  const isEmailMatch = email === 'jane@gmail.com';

  // fungsi untuk buka pop-up foto
  const handlePhotoPress = () => setPhotoModalVisible(true);
  // fungsi untuk pilih foto (jane)
  const selectJane = () => {
    setProfileImage(require('./assets/jane.png'));
    setPhotoModalVisible(false);
  };
  // fungsi untuk pilih foto (kosong)
  const selectNone = () => {
    setProfileImage(null);
    setPhotoModalVisible(false);
  };
  // fungsi untuk tampilkan error jika email cocok
  const handleContinue = () => {
    if (isEmailMatch) setErrorVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* pop-up untuk tampilkan error */}
      <Modal
        visible={errorVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setErrorVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setErrorVisible(false)}>
          <View style={styles.errorOverlay}>
            <View style={styles.errorBanner}>
              <Text style={styles.errorText}>
                Email sudah terdaftar pada aplikasi
              </Text>
              <TouchableOpacity
                style={styles.errorCloseButton}
                onPress={() => setErrorVisible(false)}>
                <Text style={styles.errorCloseText}>×</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* header (tombol 'back' dan title) */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity>
          <Text style={styles.backArrow}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>

      {/* body (input boxes dan tombol 'continue') */}
      <View style={styles.bodyWrapper}>
        {/* foto profil */}
        <TouchableOpacity
          style={styles.photoContainer}
          onPress={handlePhotoPress}>
          <View style={styles.photoCircle}>
            <Image
              source={profileImage || require('./assets/null-photo.png')}
              style={styles.photo}
            />
          </View>
        </TouchableOpacity>

        {/* input untuk nama, email, dan password */}
        <View style={styles.inputContainer}>
          <Text style={[styles.label]}>Full Name</Text>
          <TextInput
            style={[styles.input, isNameMatch && styles.inputActiveName]}
            placeholder="Type your full name"
            placeholderTextColor="#8D92A3"
            value={fullName}
            onChangeText={setFullName}
          />

          <Text style={[styles.label, isEmailMatch && styles.labelActiveEmail]}>
            Email Address
          </Text>
          <TextInput
            style={[styles.input, isEmailMatch && styles.inputActiveEmail]}
            placeholder="Type your email address"
            placeholderTextColor="#8D92A3"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Type your password"
            placeholderTextColor="#8D92A3"
            secureTextEntry
          />
        </View>

        {/* tombol 'continue' */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* pop-up untuk pilih foto */}
      <Modal
        visible={photoModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setPhotoModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setPhotoModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalOptionsRow}>
                {/* jane */}
                <TouchableOpacity
                  onPress={selectJane}
                  style={styles.modalOption}>
                  <Image
                    source={require('./assets/jane.png')}
                    style={styles.modalImage}
                  />
                </TouchableOpacity>
                {/* kosong */}
                <TouchableOpacity
                  onPress={selectNone}
                  style={styles.modalOption}>
                  <Image
                    source={require('./assets/null-photo.png')}
                    style={styles.modalImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

// gaya buat tiap komponen
const styles = StyleSheet.create({
  // kontainer
  container: {
    flex: 1,
    backgroundColor: '#fafafc',
  },
  // header
  headerWrapper: {
    width: '100%',
    height: 108,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  // ikon panah
  backArrow: {
    fontFamily: 'Poppins',
    fontSize: 24,
    color: '#1C1C1E',
  },
  // title header
  headerTitle: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 22,
    color: '#1C1C1E',
    marginLeft: 24,
  },
  // body
  bodyWrapper: {
    width: '100%',
    height: 508,
    position: 'absolute',
    top: 132,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  // kontainer foto
  photoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  // lingkaran foto
  photoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#D9DBE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // foto
  photo: {
    width: 100,
    height: 100,
    borderRadius: 45,
  },
  // kontainer input
  inputContainer: {
    width: '100%',
  },
  // label input
  label: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  // label aktif untuk nama
  labelActiveName: {
    color: '#1ABC9C',
  },
  // label aktif untuk email
  labelActiveEmail: {
    color: '#D9435E',
  },
  // input
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 24,
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#1C1C1E',
  },
  // input aktif untuk nama
  inputActiveName: {
    borderColor: '#1ABC9C',
  },
  // input aktif untuk email
  inputActiveEmail: {
    borderColor: '#D9435E',
  },
  // tombol 'continue'
  continueButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#02CF8E',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  // teks tombol 'continue'
  continueText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    color: '#020202',
  },
  // overlay pop-up
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // konten pop-up
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  // baris opsi pop-up
  modalOptionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  // opsi pop-up
  modalOption: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  // gambar opsi pop-up
  modalImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  // overlay error
  errorOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  // pop-up error
  errorBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#D9435E',
    padding: 12,
  },
  // teks error
  errorText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#FFFFFF',
  },
  // tombol 'x' error
  errorCloseButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // teks tombol 'x' error
  errorCloseText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 16,
  },
});

// ekspor komponen utama
export default SignUpMT;
