import React, { Component } from 'react';

class FileUpload extends Component {
  fileRef = React.createRef();
handleClick = () => {
    this.fileRef.current.click(); // DOM 이벤트 강제 실행
  };
render() {
    return (
      <div>
        <input
          type="file"
          ref={this.fileRef}
          style={{ display: 'none' }}
        />
        <button onClick={this.handleClick}>
          파일 선택
        </button>
      </div>
    );
  }
}

export default FileUpload
