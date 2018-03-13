import React from 'react'
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './index.less'
export default class Draft extends React.Component {
	state = {
        editorContent: '',
        contentState: null,
        editorState: ''
    }
    onEditorChange = editorContent => {
        this.setState({
            editorContent,
        }, () => {
            let {editorState, editorContent} = this.state
            this.props.callback && this.props.callback({content: editorContent})
        })
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }
    imageUploadCallBack = file => new Promise( (resolve, reject) => {
    	console.log(file)
    	setTimeout(() => {
			resolve(file)
    	}, 1000)
    })
    componentWillUnmount () {
        this.setState = (state, callback) => null
    }
	render () {
		let {editorState} = this.state
		return (
			<div id="draft">
				<Editor
                    editorState={editorState}
                    toolbarClassName="draft-toolbar"
                    wrapperClassName="draft-wrapper"
                    editorClassName="draft-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                        history: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        image: { uploadCallback: this.imageUploadCallBack },
                    }}
                    onContentStateChange={this.onEditorChange}
                    placeholder="@某人哦！！"
                    spellCheck
                    onFocus={() => {console.log('focus')}}
                    onBlur={() => {console.log('blur')}}
                    onTab={() => {console.log('tab'); return true;}}
                    localization={{ locale: 'zh', translations: {'generic.add': 'Add'} }}
                    mention={{
                        separator: ' ',
                        trigger: '@',
                        caseSensitive: true,
                        suggestions: [
                            { text: 'A', value: 'AB', url: 'href-a' },
                            { text: 'AB', value: 'ABC', url: 'href-ab' },
                            { text: 'ABC', value: 'ABCD', url: 'href-abc' },
                            { text: 'ABCD', value: 'ABCDDDD', url: 'href-abcd' },
                            { text: 'ABCDE', value: 'ABCDE', url: 'href-abcde' },
                            { text: 'ABCDEF', value: 'ABCDEF', url: 'href-abcdef' },
                            { text: 'ABCDEFG', value: 'ABCDEFG', url: 'href-abcdefg' },
                        ],
                    }}
                />
			</div>
		)
	}
}

