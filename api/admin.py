from django.contrib import admin
from .models import Forum,Post

class ForumAdmin(admin.ModelAdmin):
    list_display = ['subject','message','datePost']



class PostAdmin(admin.ModelAdmin):
    list_display = ['content','pdf_file','date_post']


admin.site.register(Forum,ForumAdmin)
admin.site.register(Post,PostAdmin)
