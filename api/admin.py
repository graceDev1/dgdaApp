from django.contrib import admin
from .models import User, Forum,Post


class UserAdmin(admin.ModelAdmin):
    list_display = ['nom','prenom','email','password']

class ForumAdmin(admin.ModelAdmin):
    list_display = ['subject','message','user','datePost']


class PostAdmin(admin.ModelAdmin):
    list_display = ['content','pdf_file','date_post']




admin.site.register(User,UserAdmin)
admin.site.register(Forum,ForumAdmin)
admin.site.register(Post,PostAdmin)
