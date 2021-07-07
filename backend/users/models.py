from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.template.defaultfilters import slugify


class User(AbstractUser):
    slug = models.SlugField()
    
    def save(self,*args, **kwargs):
        
        if not self.slug:
            slug_unique = self.username
            
            self.slug = slugify(slug_unique)

        super(User,self).save(*args, **kwargs)