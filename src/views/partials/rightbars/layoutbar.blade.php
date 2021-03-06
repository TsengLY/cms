{{-- */ if(!isset($element_id)) $element_id = 0; /* --}}

<div class="right-bar">

	<div class="right-body multi">
	
		<ul class="multi-panel">

			<li>

				<header>

					<h2>{{t('heading.layout.bar_title')}}</h2>

				</header>

				<div id="template-wrapper">
					{{Render::layoutPreview($header_selected, $layout_selected, $footer_selected)}}
				</div>

			</li>

			<li>
				
				<header>

					<h2>{{t('heading.element.bar_title')}}</h2>

					<button id="create-element" class="btn btn-primary loading">
						<i class="icon-plus-sign"></i> {{t('form.button.element')}}
					</button>

				</header>

				<div class="dl">

					<ol class="dl-list">

						{{Render::elementList($page_id, $element_id)}}

					</ol>

				</div>

			</li>

		</ul>

	</div>

	<footer>
			
		<ul class="toolbar">
			<li class="active"><a href="#"><i class="icon-desktop"></i></a></li>
			<li><a href="#"><i class="icon-sort-by-attributes"></i></a></li>
		</ul>

	</footer>

</div>