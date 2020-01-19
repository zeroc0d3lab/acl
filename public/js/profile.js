!function(t){var a={};function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/",i(i.s=121)}({121:function(t,a,i){t.exports=i(122)},122:function(t,a){function i(t,a){for(var i=0;i<a.length;i++){var e=a[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var e=function(){function t(a){!function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}(this,t),this.$container=a,this.$avatarView=this.$container.find(".avatar-view"),this.$triggerButton=this.$avatarView.find(".mt-overlay .btn-outline"),this.$avatar=this.$avatarView.find("img"),this.$avatarModal=this.$container.find("#avatar-modal"),this.$loading=this.$container.find(".loading"),this.$avatarForm=this.$avatarModal.find(".avatar-form"),this.$avatarSrc=this.$avatarForm.find(".avatar-src"),this.$avatarData=this.$avatarForm.find(".avatar-data"),this.$avatarInput=this.$avatarForm.find(".avatar-input"),this.$avatarSave=this.$avatarForm.find(".avatar-save"),this.$avatarWrapper=this.$avatarModal.find(".avatar-wrapper"),this.$avatarPreview=this.$avatarModal.find(".avatar-preview"),this.support={fileList:!!$('<input type="file">').prop("files"),fileReader:!!window.FileReader,formData:!!window.FormData}}var a,e,r;return a=t,r=[{key:"isImageFile",value:function(t){return t.type?/^image\/\w+$/.test(t.type):/\.(jpg|jpeg|png|gif)$/.test(t)}},{key:"submitFail",value:function(t){Zeroc0d3lab.handleError(t)}}],(e=[{key:"init",value:function(){this.support.datauri=this.support.fileList&&this.support.fileReader,this.support.formData||this.initIframe(),this.initTooltip(),this.initModal(),this.addListener()}},{key:"addListener",value:function(){this.$triggerButton.on("click",$.proxy(this.click,this)),this.$avatarInput.on("change",$.proxy(this.change,this)),this.$avatarForm.on("submit",$.proxy(this.submit,this))}},{key:"initTooltip",value:function(){this.$avatarView.tooltip({placement:"bottom"})}},{key:"initModal",value:function(){this.$avatarModal.modal("hide"),this.initPreview()}},{key:"initPreview",value:function(){var t=this.$avatar.prop("src");this.$avatarPreview.empty().html('<img src="'+t+'">')}},{key:"initIframe",value:function(){var t="avatar-iframe-"+Math.random().toString().replace(".",""),a=$('<iframe name="'+t+'" style="display:none;"></iframe>'),i=!0,e=this;this.$iframe=a,this.$avatarForm.attr("target",t).after(a),this.$iframe.on("load",function(){var t,a,r;try{a=this.contentWindow,t=(r=(r=this.contentDocument)||a.document)?r.body.innerText:null}catch(t){}t?e.submitDone(t):i?i=!1:e.submitFail("Image upload failed!"),e.submitEnd()})}},{key:"click",value:function(){this.$avatarModal.modal("show")}},{key:"change",value:function(){var a,i;this.support.datauri?(a=this.$avatarInput.prop("files")).length>0&&(i=a[0],t.isImageFile(i)&&this.read(i)):(i=this.$avatarInput.val(),t.isImageFile(i)&&this.syncUpload())}},{key:"submit",value:function(){return this.$avatarSrc.val()||this.$avatarInput.val()?this.support.formData?(this.ajaxUpload(),!1):void 0:(Zeroc0d3lab.showError("Please select image!"),!1)}},{key:"read",value:function(t){var a=this,i=new FileReader;i.readAsDataURL(t),i.onload=function(){a.url=this.result,a.startCropper()}}},{key:"startCropper",value:function(){var t=this;this.active?this.$img.cropper("replace",this.url):(this.$img=$('<img src="'+this.url+'">'),this.$avatarWrapper.empty().html(this.$img),this.$img.cropper({aspectRatio:1,rotatable:!0,preview:this.$avatarPreview.selector,done:function(a){var i=['{"x":'+a.x,'"y":'+a.y,'"height":'+a.height,'"width":'+a.width+"}"].join();t.$avatarData.val(i)}}),this.active=!0)}},{key:"stopCropper",value:function(){this.active&&(this.$img.cropper("destroy"),this.$img.remove(),this.active=!1)}},{key:"ajaxUpload",value:function(){var t=this.$avatarForm.attr("action"),a=new FormData(this.$avatarForm[0]),i=this;$.ajax(t,{type:"POST",data:a,processData:!1,contentType:!1,beforeSend:function(){i.submitStart()},success:function(t){i.submitDone(t)},error:function(t,a,e){i.submitFail(t.responseJSON,a||e)},complete:function(){i.submitEnd()}})}},{key:"syncUpload",value:function(){this.$avatarSave.click()}},{key:"submitStart",value:function(){this.$loading.fadeIn(),this.$avatarSave.attr("disabled",!0).text("Saving...")}},{key:"submitDone",value:function(t){try{t=$.parseJSON(t)}catch(t){}t&&!t.error&&t.data?(this.url=t.data.url,this.support.datauri||this.uploaded?(this.uploaded=!1,this.cropDone()):(this.uploaded=!0,this.$avatarSrc.val(this.url),this.startCropper()),this.$avatarInput.val(""),Zeroc0d3lab.showSuccess(t.message)):Zeroc0d3lab.showError(t.message)}},{key:"submitEnd",value:function(){this.$loading.fadeOut(),this.$avatarSave.removeAttr("disabled").text("Save")}},{key:"cropDone",value:function(){this.$avatarSrc.val(""),this.$avatarData.val(""),this.$avatar.prop("src",this.url),$(".user-menu img").prop("src",this.url),$(".user.dropdown img").prop("src",this.url),this.stopCropper(),this.initModal()}}])&&i(a.prototype,e),r&&i(a,r),t}();$(document).ready(function(){new e($(".crop-avatar")).init()})}});