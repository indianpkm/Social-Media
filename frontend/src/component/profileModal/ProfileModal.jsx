import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpen,setModalOpen}) {
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
      <form action="" className="infoForm">
        <h3>Your info</h3>
        <div>
          <input type="text" className="infoInput" name='firstname' placeholder='First Name'  />

          <input type="text" className="infoInput" name='lastname' placeholder='Last Name'  />
      </div>

          <div>
          <input type="text" className="infoInput" name='skill' placeholder='Skill'  />
          </div>

          <div>
          <input type="text" className="infoInput" name='livesIn' placeholder='Lives In'  />

          <input type="text" className="infoInput" name='country' placeholder='Country'  />
          </div>

          <div>
          <input type="text" className="infoInput" name='relationship' placeholder='RelationShip Status'  />
          </div>

          <div>
            Profile Image
          <input type="file" name='profileImg' />
          Cover Image
          <input type="file" name='coverImg' />
          </div>

          <button className="button infoButton">
            Update
          </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;