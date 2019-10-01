import React from 'react';
import './App.css';
import CoursePage from './pages/course-page';
import { useOvermind } from './overmind';
import { Button, Icon } from 'semantic-ui-react';
import UploadCourseModal from './components/upload-course-modal';

const OptionsContainer = ({ showCurrentCourse }) => {
  return (
    <div>
      <UploadCourseModal modalTrigger={<Button color='violet' active={true}>
            <Icon name='upload'></Icon>
            <strong>Upload JSON</strong>
        </Button>} />

        <Button color="orange" onClick={showCurrentCourse}>
            <strong>Show Original Course</strong>
        </Button>
        
    </div>
  );
}

function App() {

  const { actions, state } = useOvermind();

  React.useEffect(() => {
    actions.init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showCurrentCourse = () => {
    actions.loadFromStorage();
  }

  return (
    <div>
      <div id="nav">
        <img 
          style={{height: 40}}
          src="https://my.cti.qld.edu.au/pluginfile.php/1/core_admin/logocompact/0x70/1559616009/logo-lg-white.png" 
          alt="CTI Logo" />
      </div>
      <div id="page-content">

      {
        state.course === null
        ? <OptionsContainer showCurrentCourse={showCurrentCourse} />
        : <CoursePage />
      }

          {/* <CoursePage /> */}
      </div>
    </div>
  );
}

export default App;
