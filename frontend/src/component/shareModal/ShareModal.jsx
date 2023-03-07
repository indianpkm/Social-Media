import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../postShare/PostShare';

function ShareModal({modalOpen,setModalOpen}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      size='55%'
      overlayBlur={3}
      opened={modalOpen}
      onClose={()=>setModalOpen(false)}
      >
     <PostShare/>
    </Modal>
  );
}

export default ShareModal;