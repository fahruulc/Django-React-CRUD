from django.db import models


class Note(models.Model):
    note = models.CharField(max_length=250)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.note
