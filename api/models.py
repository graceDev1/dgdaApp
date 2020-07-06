from django.db import models


class Forum(models.Model):
    subject = models.CharField(max_length=100)
    message = models.TextField()
    datePost = models.DateField(auto_now=True)

    

class Post(models.Model):
    content = models.TextField()
    pdf_file = models.FileField(upload_to='pdf_file', max_length=255)
    date_post = models.DateField(auto_now=True)
