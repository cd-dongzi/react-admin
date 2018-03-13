export const AnimateFadeHtml = `
	<h3 id="react-transition-group"><strong><a href="http://reactcommunity.org/react-transition-group/">react-transition-group</a></strong></h3>
	<h4 id="transition">Transition</h4>
	<p>动画执行的4个状态：<br>  <strong>1.<code>entering</code></strong>: 开始动画执行中<br>  <strong>2.<code>entered</code></strong>：开始动画执行完毕<br>  <strong>3.<code>exiting</code></strong>：结束动画执行中<br>  <strong>4.<code>exited</code></strong>：结束动画完毕</p>
	<p><strong><code>in</code></strong><br>通过 <code>in</code> 这个参数决定初始形态， <code>true</code>为<code>entered</code>; <code>false</code>为<code>exited</code>; 默认<code>false</code></p>
	<p><strong><code>timeout</code></strong><br>动画执行时间（必须）</p>
	<pre><code><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
	<span class="hljs-keyword">import</span> {Row, Col, Card, Button} <span class="hljs-keyword">from</span> <span class="hljs-string">'antd'</span>
	<span class="hljs-keyword">import</span> {Transition} <span class="hljs-keyword">from</span> <span class="hljs-string">'react-transition-group'</span>
	const duration = <span class="hljs-number">300</span>
	const defaultStyle = {
	    transition: <span class="hljs-string">'opacity 300ms ease-in-out,
	    opacity: 0,
	      padding: 20,
	      display: '</span>inline-block<span class="hljs-string">',
	      backgroundColor: '</span><span class="hljs-comment">#8787d8'</span>
	}
	const transitionStyles = {
	    entering: { opacity: <span class="hljs-number">0</span> },
	      entered: { opacity: <span class="hljs-number">1</span> }
	}
	const AnimateComponent = <span class="hljs-function"><span class="hljs-params">({<span class="hljs-keyword">in</span>: inPro})</span> =&gt;</span> (
	    &lt;Transition
	        <span class="hljs-keyword">in</span>={inPro}
	        timeout={<span class="hljs-number">300</span>}&gt;
	        {status =&gt; {
	            <span class="hljs-built_in">console</span>.log(status)
	            <span class="hljs-keyword">return</span> (
	                &lt;div style={{
	                    ...defaultStyle,
	                    ...transitionStyles[status]
	                }}&gt;
	                    Fade动画
	                &lt;/div&gt;
	            )
	        }}
	    &lt;/Transition&gt;
	)
	<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Fade</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> {</span>
	    state = {
	        show: <span class="hljs-literal">true</span>
	    }
	<span class="hljs-function">    <span class="hljs-title">handleToggle</span> = <span class="hljs-params">()</span> =&gt;</span> {
	        <span class="hljs-keyword">this</span>.setState({
	            show: !<span class="hljs-keyword">this</span>.state.show
	        })
	    }
	    render () {
	        <span class="hljs-keyword">return</span> (
	            &lt;Row className=<span class="hljs-string">"gutter-row fmt"</span>&gt;
	                &lt;Col className=<span class="hljs-string">"gutter-col"</span> md={<span class="hljs-number">22</span>}&gt;
	                    &lt;Card title=<span class="hljs-string">"react-transition-group"</span>&gt;
	                        &lt;div dangerouslySetInnerHTML={{__html: html}}&gt;&lt;/div&gt;
	                    &lt;/Card&gt;
	                &lt;/Col&gt;

	                &lt;Col className=<span class="hljs-string">"gutter-col"</span> md={<span class="hljs-number">22</span>}&gt;
	                    &lt;Card title=<span class="hljs-string">"实例演示"</span>&gt;
	                        &lt;Button type=<span class="hljs-string">"primary"</span> onClick={<span class="hljs-keyword">this</span>.handleToggle.bind(<span class="hljs-keyword">this</span>)} style={{display: <span class="hljs-string">'block'</span>, marginBottom: <span class="hljs-string">'10px'</span>}}&gt;toggle&lt;/Button&gt;
	                        &lt;AnimateComponent <span class="hljs-keyword">in</span>={<span class="hljs-keyword">this</span>.state.show}/&gt;
	                    &lt;/Card&gt;
	                &lt;/Col&gt;
	            &lt;/Row&gt;
	        )
	    }
	}
	</code></pre>
`

export const AnimateGroupFade = `
	<h3 id="react-transition-group"><strong><a href="http://reactcommunity.org/react-transition-group/">react-transition-group</a></strong></h3>
	<h4 id="transitiongroup"><a href="http://reactcommunity.org/react-transition-group/#TransitionGroup">TransitionGroup</a></h4>
	<h4 id="csstransition"><a href="http://reactcommunity.org/react-transition-group/#CSSTransition">CSSTransition</a></h4>
	<p>  根据 <code>calssNames</code> 的css类名来进行动画</p>
	<pre><code><span class="hljs-comment">// js</span>
	<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">'react'</span>
	<span class="hljs-keyword">import</span> {Row, Col, Card, Button} <span class="hljs-keyword">from</span> <span class="hljs-string">'antd'</span>
	<span class="hljs-keyword">import</span> { CSSTransition, TransitionGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">'react-transition-group'</span>
	<span class="hljs-keyword">import</span> <span class="hljs-string">'./index.less'</span>

	<span class="hljs-keyword">const</span> Fade = <span class="hljs-function">(<span class="hljs-params">{ children, ...props }</span>) =&gt;</span> {
	      <span class="hljs-keyword">return</span> (
	          <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CSSTransition</span>
	            {<span class="hljs-attr">...props</span>}
	            <span class="hljs-attr">timeout</span>=<span class="hljs-string">{1000}</span>
	            <span class="hljs-attr">classNames</span>=<span class="hljs-string">"fade"</span>&gt;</span>
	            {children}
	          <span class="hljs-tag">&lt;/<span class="hljs-name">CSSTransition</span>&gt;</span></span>
	    )
	}


	<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">TodoList</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
	      <span class="hljs-keyword">constructor</span>(props) {
	        <span class="hljs-keyword">super</span>(props)
	        <span class="hljs-keyword">this</span>.state = { <span class="hljs-attr">items</span>: [<span class="hljs-string">'hello'</span>, <span class="hljs-string">'world'</span>, <span class="hljs-string">'click'</span>, <span class="hljs-string">'me'</span>] }
	      }
	      handleAdd() {
	        <span class="hljs-keyword">this</span>.setState({
	              <span class="hljs-attr">items</span>: [
	                ...this.state.items,
	                prompt(<span class="hljs-string">'Enter some text'</span>)
	              ]
	        })
	      }
	      handleRemove(i) {
	        <span class="hljs-keyword">let</span> newItems = <span class="hljs-keyword">this</span>.state.items.slice()
	        newItems.splice(i, <span class="hljs-number">1</span>)
	        <span class="hljs-keyword">this</span>.setState({ <span class="hljs-attr">items</span>: newItems })
	      }
	      render() {
	        <span class="hljs-keyword">return</span> (
	            <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Row</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"gutter-row fmt"</span>&gt;</span>
	                <span class="hljs-tag">&lt;<span class="hljs-name">Col</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"gutter-col"</span> <span class="hljs-attr">md</span>=<span class="hljs-string">{24}</span>&gt;</span>
	                    <span class="hljs-tag">&lt;<span class="hljs-name">Card</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"react-transition-group"</span>&gt;</span>
	                        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">dangerouslySetInnerHTML</span>=<span class="hljs-string">{{__html:</span> ''}}&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	                    <span class="hljs-tag">&lt;/<span class="hljs-name">Card</span>&gt;</span>
	                <span class="hljs-tag">&lt;/<span class="hljs-name">Col</span>&gt;</span>

	                <span class="hljs-tag">&lt;<span class="hljs-name">Col</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"gutter-col"</span> <span class="hljs-attr">md</span>=<span class="hljs-string">{8}</span>&gt;</span>
	                    <span class="hljs-tag">&lt;<span class="hljs-name">Card</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"实例演示"</span>&gt;</span>
	                        <span class="hljs-tag">&lt;<span class="hljs-name">TransitionGroup</span> <span class="hljs-attr">className</span>=<span class="hljs-string">'todo-list'</span>&gt;</span>
	                              {this.state.items.map((item, i) =&gt; (
	                                <span class="hljs-tag">&lt;<span class="hljs-name">Fade</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item}</span>&gt;</span>
	                                      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
	                                        {item}
	                                            <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> this.handleRemove(i)}&gt;&amp;times;<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
	                                      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	                                   <span class="hljs-tag">&lt;/<span class="hljs-name">Fade</span>&gt;</span>
	                              ))}
	                        <span class="hljs-tag">&lt;/<span class="hljs-name">TransitionGroup</span>&gt;</span>
	                        <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> this.handleAdd()}&gt;Add Item<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
	                    <span class="hljs-tag">&lt;/<span class="hljs-name">Card</span>&gt;</span>
	                <span class="hljs-tag">&lt;/<span class="hljs-name">Col</span>&gt;</span>
	            <span class="hljs-tag">&lt;/<span class="hljs-name">Row</span>&gt;</span></span>

	        )    
	      }
	}

	</code></pre><pre><code><span class="hljs-regexp">//</span> index.less
	.fade-enter {
	  opacity: <span class="hljs-number">0.01</span>;
	}

	.fade-enter.fade-enter-active {
	  opacity: <span class="hljs-number">1</span>;
	  transition: opacity <span class="hljs-number">1000</span>ms ease-<span class="hljs-keyword">in</span>;
	}

	.fade-<span class="hljs-keyword">exit</span> {
	  opacity: <span class="hljs-number">1</span>;
	}

	.fade-<span class="hljs-keyword">exit</span>.fade-<span class="hljs-keyword">exit</span>-active {
	  opacity: <span class="hljs-number">0.01</span>;
	  transition: opacity <span class="hljs-number">800</span>ms ease-<span class="hljs-keyword">in</span>;
	}


	<span class="hljs-regexp">/**--- example styles ---**/</span>
	.todo-list &gt; * {
	  margin: <span class="hljs-number">5</span>px <span class="hljs-number">0</span>;
	  padding: <span class="hljs-number">5</span>px <span class="hljs-number">0</span>;
	  border-bottom:  <span class="hljs-number">1</span>px solid <span class="hljs-comment">#ccc;</span>
	}

	</code></pre>
`

export const componentSvg = `
	<h2 id="-"><a href="http://www.iconfont.cn">阿里巴巴矢量图</a></h2>
	<p><strong>特点</strong></p>
	<ul>
	<li>支持多色图标了，不再受单色限制。</li>
	<li>通过一些技巧，支持像字体那样，通过<code>font-size</code>,<code>color</code>来调整样式。</li>
	<li>兼容性较差，支持 ie9+,及现代浏览器。</li>
	<li>浏览器渲染svg的性能一般，还不如png。</li>
	</ul>
	<p><strong>使用步骤</strong></p>
	<ol>
	<li><p>第一步：引入项目下面生成的symbol代码：</p>
	<pre><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"./iconfont.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	</code></pre></li>
	<li><p>第二步：加入通用css代码（引入一次就行）：</p>
	<pre><code> <span class="hljs-tag">&lt;<span class="hljs-name">style</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/css"</span>&gt;</span><span class="css">
	   <span class="hljs-selector-class">.icon</span> {
	     <span class="hljs-attribute">width</span>: <span class="hljs-number">1em</span>; <span class="hljs-attribute">height</span>: <span class="hljs-number">1em</span>;
	     <span class="hljs-attribute">vertical-align</span>: -<span class="hljs-number">0.15em</span>;
	     <span class="hljs-attribute">fill</span>: currentColor;
	     <span class="hljs-attribute">overflow</span>: hidden;
	   }
	 </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
	</code></pre></li>
	<li><p>第三步：挑选相应图标并获取类名，应用于页面：</p>
	<pre><code>&lt;svg <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"icon"</span> aria-hidden=<span class="hljs-string">"true"</span>&gt;
	 <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">use</span> <span class="hljs-attr">xlink:href</span>=<span class="hljs-string">"#icon-xxx"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">use</span>&gt;</span></span>
	&lt;<span class="hljs-regexp">/svg&gt;</span>
	</code></pre></li>
	</ol>
`