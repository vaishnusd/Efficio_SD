import { Modal, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../src/utils/CustomButton';
import Colors from '../../src/utils/Colors'

export default AckIssueSubmitMessage = ({
	isVisible,
	onClose,
	message,
	continuing,
}) => {
	return (
		<Modal
			style={styles.container}
			visible={isVisible}
			animationType='fade'
			transparent={true}
		>
			<View style={styles.modalBackground}>
				<View style={styles.modalContent}>
					{message === 'Success' ? (
						<View>
							<Text
								style={{
									color: Colors.greenTag,
									alignSelf: 'center',
									textAlign: 'center',
									paddingBottom: 20,
								}}
							>
								Issue successfully Acknowledged
							</Text>
							<View
								style={{
									flexDirection: 'row',
									gap: 20,
									justifyContent: 'center',
									paddingTop: 20,
								}}
							>
								<CustomButton
									functionPassed={onClose}
									colorPassed={Colors.darkBlue}
									textPassed={'OK'}
								/>
							</View>
						</View>
					) : (
						<View style={{ gap: 20, alignItems: 'center' }}>
							<Text
								style={{
									color: Colors.redHeaderButton,
									alignSelf: 'center',
									textAlign: 'center',
								}}
							>
								Acknowledge Issue Submission Unsuccessfull
							</Text>
							<CustomButton
								functionPassed={onClose}
								colorPassed={Colors.darkBlue}
								textPassed={'OK'}
							/>
						</View>
					)}
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		height: 250,
		padding: 10,
	},
	modalBackground: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	},
	modalContent: {
		padding: 20,
		backgroundColor: Colors.white,
		elevation: 5,
		width: 280,
		gap: 20,
		alignItems: 'center',
	},
});